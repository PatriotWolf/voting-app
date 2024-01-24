export const deletePoll = async (pollId: string) => {
  try {
    const response = await fetch(`/api/vote/${pollId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to delete poll');
    }

    const { id } = await response.json();

    return id;
  } catch (error) {
    throw new Error('Failed to delete poll');
  }
};
