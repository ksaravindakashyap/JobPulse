"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Language from "@/components/Layout/Language";

const ClientProvider = ({ children, currentUser, navigation }) => {
	const pathname = usePathname();
	// Check if the path contains '/dashboard'
	const isDashboardPath = pathname.includes("/dashboard");

	return (
		<>
			{!isDashboardPath && (
				<Navbar currentUser={currentUser} navigation={navigation} />
			)}

			<Toaster />

			{children}

			{!isDashboardPath && <Footer />}

			<Language />
		</>
	);
};

export default ClientProvider;
