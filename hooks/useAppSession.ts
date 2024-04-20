import { UseSessionOptions, useSession } from "next-auth/react";

import { Session } from "next-auth";

interface AppSession extends Session {
  userId: string;
}

export const useAppSession = (config?: UseSessionOptions<true | false>) => {
  const { data: session, status } = useSession(config);

  return {
    session: session as AppSession | null,
    status,
  };
};
