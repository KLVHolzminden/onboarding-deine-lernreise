const DEFAULT_IDLE_TIMEOUT_MS = 15000;
const SHUTDOWN_DELAY_MS = 600;

type LocalRuntimeState = {
  shutdownTimer: NodeJS.Timeout | null;
};

declare global {
  var __lsbLocalRuntimeState__: LocalRuntimeState | undefined;
}

function getRuntimeState(): LocalRuntimeState {
  if (!globalThis.__lsbLocalRuntimeState__) {
    globalThis.__lsbLocalRuntimeState__ = {
      shutdownTimer: null,
    };
  }

  return globalThis.__lsbLocalRuntimeState__;
}

function clearShutdownTimer() {
  const state = getRuntimeState();

  if (state.shutdownTimer) {
    clearTimeout(state.shutdownTimer);
    state.shutdownTimer = null;
  }
}

function scheduleShutdown(delayMs: number) {
  clearShutdownTimer();

  const state = getRuntimeState();
  state.shutdownTimer = setTimeout(() => {
    process.exit(0);
  }, delayMs);

  state.shutdownTimer.unref?.();
}

export function isLocalAppRuntimeEnabled() {
  return process.env.APP_ALLOW_SHUTDOWN === "1";
}

export function registerLocalAppHeartbeat() {
  if (!isLocalAppRuntimeEnabled()) {
    return false;
  }

  scheduleShutdown(DEFAULT_IDLE_TIMEOUT_MS);
  return true;
}

export function registerLocalAppShutdown() {
  if (!isLocalAppRuntimeEnabled()) {
    return false;
  }

  scheduleShutdown(SHUTDOWN_DELAY_MS);
  return true;
}
