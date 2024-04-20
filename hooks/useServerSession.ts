import { Session, getServerSession } from "next-auth";
import { UseSessionOptions } from "next-auth/react";

import { authOptions } from "@/app/options";

interface AppSession extends Session {
  userId: string;
}

export const useServerSession = async (
  config?: UseSessionOptions<true | false>
) => {
  const session = await getServerSession(authOptions);

  return {
    session: session as AppSession | null,
  };
};
