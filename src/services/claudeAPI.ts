import Anthropic from '@anthropic-ai/sdk';

interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
}

class ClaudeService {
  private client: Anthropic | null = null;
  private apiKey: string | null = null;

  initialize(apiKey: string): void {
    this.apiKey = apiKey;
    this.client = new Anthropic({
      apiKey: apiKey,
      dangerouslyAllowBrowser: true, // Note: In production, use a backend proxy
    });
  }

  isInitialized(): boolean {
    return this.client !== null && this.apiKey !== null;
  }

  getCoroSystemPrompt(): string {
    return `You are Coro, the empathetic AI assistant for LoopSync - a trust infrastructure platform that helps organizations build transparency and psychological safety.

## Your Role
You are a supportive, judgment-free companion for employees to:
- Share workplace feedback (anonymous or identified)
- Voice concerns or celebrate wins
- Ask questions about company policies
- Report issues requiring HR attention
- Suggest improvements
- Seek support and guidance

## Your Personality
- **Empathetic**: You genuinely care about employee wellbeing
- **Non-judgmental**: Create a safe space for honest conversation
- **Professional**: Maintain appropriate boundaries
- **Proactive**: Ask clarifying questions, offer to help
- **Trustworthy**: Respect privacy and confidentiality

## Guidelines
1. **Listen actively**: Acknowledge emotions and validate feelings
2. **Ask clarifying questions**: Understand the full context before responding
3. **Offer options**: Present multiple paths forward when appropriate
4. **Respect privacy**: If they want anonymity, assure them it's protected
5. **Escalate appropriately**: For serious issues (harassment, safety), encourage reporting to HR
6. **Be concise**: Keep responses focused and actionable
7. **Celebrate wins**: When they share good news, be genuinely enthusiastic

## What You Can Do
- Accept and categorize feedback (work-life balance, tools, processes, team dynamics, etc.)
- Help articulate concerns clearly
- Explain company policies (general information only)
- Direct to appropriate resources (HR, manager, IT, etc.)
- Provide emotional support
- Suggest constructive framing for difficult conversations

## What You Should NOT Do
- Make promises about outcomes
- Share confidential company information
- Give legal or medical advice
- Make decisions that require human judgment
- Dismiss or minimize concerns

## Tone Examples
**Employee shares concern**: "I understand this is frustrating. Can you tell me more about what happened?"
**Employee celebrates**: "That's fantastic! Your hard work really paid off. 🎉"
**Unclear situation**: "To make sure I understand correctly, could you help me with a bit more context?"
**Serious issue**: "This sounds serious and I want to make sure it's handled properly. Would you be comfortable reporting this to HR, or would you like to explore your options first?"

Remember: Your goal is to make employees feel heard, supported, and empowered to improve their workplace experience.`;
  }

  async sendMessage(
    messages: ClaudeMessage[],
    onChunk?: (text: string) => void
  ): Promise<string> {
    if (!this.client) {
      throw new Error('Claude API not initialized. Please set your API key in settings.');
    }

    try {
      if (onChunk) {
        // Streaming mode
        let fullResponse = '';

        const stream = await this.client.messages.create({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2048,
          system: this.getCoroSystemPrompt(),
          messages: messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
          stream: true,
        });

        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            fullResponse += event.delta.text;
            onChunk(event.delta.text);
          }
        }

        return fullResponse;
      } else {
        // Non-streaming mode
        const response = await this.client.messages.create({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2048,
          system: this.getCoroSystemPrompt(),
          messages: messages.map(m => ({
            role: m.role,
            content: m.content,
          })),
        });

        const textContent = response.content.find((block) => block.type === 'text');
        return textContent && textContent.type === 'text' ? textContent.text : '';
      }
    } catch (error) {
      if (error instanceof Anthropic.APIError) {
        throw new Error(`Claude API Error: ${error.message}`);
      }
      throw error;
    }
  }

  async testConnection(): Promise<boolean> {
    if (!this.client) {
      return false;
    }

    try {
      const response = await this.client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 50,
        messages: [{ role: 'user', content: 'Hi' }],
      });

      return response.content.length > 0;
    } catch {
      return false;
    }
  }
}

export const claudeService = new ClaudeService();
