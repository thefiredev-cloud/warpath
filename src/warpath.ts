import { EventBus } from './utils/event-bus';
import { ThreatScorer } from './analysis/threat-scorer';
import { CountermeasureEngine } from './countermeasures/engine';
import { MonitorOrchestrator } from './monitors/orchestrator';
import { logger } from './utils/logger';

export interface WarpathConfig {
  clientId: string;
  brandName: string;
  keywords: string[];
  threatThreshold?: number;
  autoResponse?: boolean;
  legalAlerts?: {
    enabled: boolean;
    email: string;
  };
}

export class Warpath {
  private config: Required<WarpathConfig>;
  private eventBus: EventBus;
  private scorer: ThreatScorer;
  private countermeasures: CountermeasureEngine;
  private monitors: MonitorOrchestrator;

  constructor(config: WarpathConfig) {
    this.config = {
      threatThreshold: 65,
      autoResponse: true,
      legalAlerts: { enabled: false, email: '' },
      ...config,
    };

    this.eventBus = new EventBus();
    this.scorer = new ThreatScorer();
    this.countermeasures = new CountermeasureEngine(this.config);
    this.monitors = new MonitorOrchestrator(this.config, this.eventBus);

    this.setupEventHandlers();
  }

  private setupEventHandlers(): void {
    this.eventBus.on('mention', async (mention) => {
      const score = await this.scorer.score(mention);

      if (score >= this.config.threatThreshold) {
        logger.warn({ clientId: this.config.clientId, score, mention }, 'Threat detected');
        await this.countermeasures.deploy(mention, score);
      }
    });
  }

  async start(): Promise<void> {
    logger.info({ clientId: this.config.clientId }, 'Warpath engine starting');
    await this.monitors.startAll();
    logger.info({ clientId: this.config.clientId }, 'Warpath engine active — watching all channels');
  }

  async stop(): Promise<void> {
    await this.monitors.stopAll();
    logger.info({ clientId: this.config.clientId }, 'Warpath engine stopped');
  }
}
