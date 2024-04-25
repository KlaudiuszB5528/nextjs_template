import { Session, getServerSession } from "next-auth";

import { authOptions } from "@/app/options";

interface AppSession extends Session {
  userId: string;
}

export const useServerSession = async () => {
  const session = await getServerSession(authOptions);
  return {
    session: session as AppSession | null,
  };
};
