# Security Policy

## Supported Versions

Security fixes are published through the moving major tag:

| Version | Supported |
| --- | --- |
| `v1` | Yes |

## Reporting a Vulnerability

Do not open a public issue with vulnerability details.

If GitHub private vulnerability reporting is available for this repository, use it from the repository Security tab. Otherwise, open a minimal public issue asking for a private contact channel and do not include exploit details, secrets, tokens, private hostnames, or sensitive logs.

Include the affected action version, workflow context, and a minimal reproduction when it is safe to share privately.

## Scope

In scope:

- credential exposure through action outputs, logs, or environment variables;
- unsafe handling of `auth: true` credentials;
- unexpected exposure of local YDB ports outside loopback;
- command injection through action inputs;
- cleanup failures that leave sensitive auth artifacts behind.

Out of scope:

- vulnerabilities in upstream `ghcr.io/ydb-platform/local-ydb` images;
- issues requiring access to a compromised GitHub runner;
- reports without a reproducible action-specific impact.
