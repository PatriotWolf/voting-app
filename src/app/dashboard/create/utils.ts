import { CreatePoll } from 'schemas';

// Generates an end date for a poll based on the selected duration.
export default function generateEndDate(endDate: string) {
  const endTime = Date.now() + parseInt(endDate) * 60 * 1000;

  return new Date(endTime);
}

export const createPoll = async (data: CreatePoll) => {
  try {
    const response = await fetch('/api/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create poll');
    }

    const { id } = await response.json();

    return id;
  } catch (error) {
    throw new Error('Failed to create poll');
  }
};
