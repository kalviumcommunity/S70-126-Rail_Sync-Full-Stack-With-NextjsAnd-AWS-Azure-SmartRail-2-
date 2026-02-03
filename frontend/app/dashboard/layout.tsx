"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LayoutWrapper, useAuth } from "@/components";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // Redirect if not authenticated
        if (!isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated, router]);

    // Optionally show nothing while checking auth
    if (!isAuthenticated) return null;

    return <LayoutWrapper>{children}</LayoutWrapper>;
}
