"use client";
import { useCallback, useEffect, useState } from "react";
import { auth } from "@/lib/auth";

interface User {
  userId: string;
  institutionId: string | null;
  authMethod: string;
  wallets: Array<{ id: string; pubkey: string; is_primary: boolean }>;
  passkeyCount: number;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      const me = await auth.getMe();
      setUser({
        userId: me.user_id,
        institutionId: me.institution_id,
        authMethod: me.auth_method,
        wallets: me.wallets,
        passkeyCount: me.passkey_count,
      });
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = useCallback(async (email: string, password: string) => {
    await auth.login(email, password);
    await fetchUser();
  }, [fetchUser]);

  const signup = useCallback(async (email: string, password: string, institutionId: string) => {
    await auth.signup(email, password, institutionId);
    await fetchUser();
  }, [fetchUser]);

  const logout = useCallback(async () => {
    await auth.logout();
    setUser(null);
  }, []);

  return {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    signup,
    logout,
    refreshUser: fetchUser,
  };
}
