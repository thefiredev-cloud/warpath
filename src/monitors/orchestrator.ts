import type { WarpathConfig } from '../warpath';
import type { EventBus } from '../utils/event-bus';

export class MonitorOrchestrator {
  constructor(
    private config: WarpathConfig,
    private eventBus: EventBus
  ) {}

  async startAll(): Promise<void> {
    // Initialize all platform monitors
    // Each monitor polls on its schedule and emits 'mention' events
  }

  async stopAll(): Promise<void> {
    // Gracefully shut down all monitors
  }
}
