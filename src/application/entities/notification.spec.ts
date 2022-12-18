import { randomUUID } from 'node:crypto';
import { Content } from './content';
import { Notification, NotificationProps } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'social',
      recipientId: randomUUID(),
    } as NotificationProps);

    expect(content).toBeTruthy();
  });
});
