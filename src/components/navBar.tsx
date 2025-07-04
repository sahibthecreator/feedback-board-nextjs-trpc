"use client";

import Image from "next/image";
import AddFeedbackModal from "./addFeedbackModal";

export default function NavBar() {
  return (
    <header className="bg-background px-10 py-3 overflow-hidden flex flex-row justify-between">
      <Image
        src="/images/buildscout-icon.svg"
        alt="Buildscout Logo"
        width={130}
        height={40}
        priority
      />
      <AddFeedbackModal />
    </header>
  );
}
