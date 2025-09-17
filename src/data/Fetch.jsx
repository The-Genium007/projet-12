import { useEffect, useState } from "react";
import { config } from "../config";
import { getMockBundle, hasMock } from "./mockData";
import { UserBundle } from "./models";

export function useUserBundle(baseUrl, userId) {
  const [bundle, setBundle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloadFlag, setReloadFlag] = useState(0); // change à chaque refetch

  function refetch() {
    setReloadFlag((n) => n + 1);
  }

  useEffect(() => {
    if (!userId) return;
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        // En mode mock, on court-circuite les appels réseau
        if (config.useMock && hasMock(userId)) {
          const mock = getMockBundle(userId);
          setBundle(new UserBundle(mock));
          return;
        }
        // Récupération des 4 endpoints (séquentiel = plus simple à lire)
        const userRes = await fetch(`${baseUrl}/user/${userId}`);
        const userJson = await userRes.json();

        const activityRes = await fetch(`${baseUrl}/user/${userId}/activity`);
        const activityJson = await activityRes.json();

        const sessionsRes = await fetch(
          `${baseUrl}/user/${userId}/average-sessions`
        );
        const sessionsJson = await sessionsRes.json();

        const perfRes = await fetch(`${baseUrl}/user/${userId}/performance`);
        const perfJson = await perfRes.json();

        const model = UserBundle.fromApi(
          userJson,
          activityJson,
          sessionsJson,
          perfJson
        );

        setBundle(model);
      } catch (e) {
        setError(e.message || String(e));
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [baseUrl, userId, reloadFlag]);

  return { data: bundle, loading, error, refetch };
}

// Loader simple pour valider l'id dans l'URL.
export async function userLoader({ params }) {
  const { id } = params || {};
  if (!id) {
    throw new Response("Missing user id", { status: 400 });
  }
  // Vérifie l'existence de l'utilisateur côté API, sinon déclenche la route d'erreur
  const API_URL = config.apiBaseUrl || "http://localhost:3000";
  try {
    // En mode mock, valide simplement l'existence du bundle
    if (config.useMock) {
      if (hasMock(id)) return { userId: id };
      throw new Response("Utilisateur introuvable", { status: 404 });
    }
    const res = await fetch(`${API_URL}/user/${id}`);
    if (!res.ok) {
      const status = res.status === 404 ? 404 : 500;
      throw new Response("Utilisateur introuvable", { status });
    }
    const json = await res.json();
    if (!json?.data?.id) {
      throw new Response("Utilisateur introuvable", { status: 404 });
    }
    return { userId: id };
  } catch (err) {
    if (err instanceof Response) throw err;
    throw new Response("Erreur réseau", { status: 502 });
  }
}
