export class UserBundle {
  constructor({ user, activity = [], sessions = [], performance = [] } = {}) {
    this.user = user || {
      id: undefined,
      firstName: undefined,
      lastName: undefined,
      age: undefined,
      score: 0,
      keyData: {},
    };
    this.activity = Array.isArray(activity) ? activity : [];
    this.sessions = Array.isArray(sessions) ? sessions : [];
    this.performance = Array.isArray(performance) ? performance : [];
  }

  // Exemple de propriété dérivée pratique
  get scorePercent() {
    const s = Number(this.user?.score || 0);
    if (!Number.isFinite(s)) return 0;
    return Math.round(s * 100);
  }

  // Conversion des réponses brutes API -> modèle normalisé
  static fromApi(userJson, activityJson, sessionsJson, perfJson) {
    const u = userJson?.data;
    const activity = activityJson?.data?.sessions
      ? activityJson.data.sessions.map((s) => ({
          day: s.day,
          kilogram: s.kilogram,
          calories: s.calories,
        }))
      : [];

    const sessions = sessionsJson?.data?.sessions
      ? sessionsJson.data.sessions.map((s) => ({
          day: s.day,
          sessionLength: s.sessionLength,
        }))
      : [];

    const performance = perfJson?.data?.data
      ? perfJson.data.data.map((p) => ({
          kind: perfJson.data.kind?.[p.kind],
          value: p.value,
        }))
      : [];

    const normalized = {
      user: {
        id: u?.id,
        firstName: u?.userInfos?.firstName,
        lastName: u?.userInfos?.lastName,
        age: u?.userInfos?.age,
        score: u?.score || u?.todayScore || 0,
        keyData: u?.keyData || {},
      },
      activity,
      sessions,
      performance,
    };

    return new UserBundle(normalized);
  }
}
