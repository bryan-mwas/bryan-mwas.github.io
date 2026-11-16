"use client";

import Link from "next/link";
import { playTactileClick } from "@/lib/sound";

export default function NotFound() {
  return (
    <main className="not-found-section">
      <div className="terminal-console">
        <div className="terminal-header">
          <span>SYS-FAULT: CODE_0x0404</span>
          <span>DIAGNOSTIC STATUS: ROUTE_UNRESOLVED</span>
        </div>

        <p className="terminal-prompt">
          <code>[FAULT_LOG]</code> Destination memory address does not map to any
          registered route on this node.
          <br />
          <code>[PROBE_IP]</code> 127.0.0.1 // NBO-GATEWAY-KE
          <br />
          <code>[TRACE]</code> GET request terminated abnormally. Resource unallocated
          or retired.
        </p>

        <p style={{ margin: "16px 0 24px", color: "var(--ink-muted)", fontSize: "0.9rem" }}>
          The requested system pathway does not exist. Initiate manual override to
          return to the root cluster:
        </p>

        <div>
          <Link
            href="/"
            onClick={() => playTactileClick()}
            className="btn btn-primary btn-tactile"
          >
            Reboot to Base [00] &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
