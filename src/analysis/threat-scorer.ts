/**
 * ThreatScorer — scores a mention 0-100 based on sentiment,
 * reach, velocity, and defamation indicators.
 */
export class ThreatScorer {
  async score(mention: unknown): Promise<number> {
    // Multi-factor scoring:
    // - Sentiment analysis (LLM)
    // - Platform authority weight
    // - Author reach (followers, review count)
    // - Velocity (how fast it's spreading)
    // - Keyword severity (legal terms, competitor names)
    return 0;
  }
}
