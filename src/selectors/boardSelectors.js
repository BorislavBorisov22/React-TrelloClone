
export function extractActiveBoard(boards, boardName) {
    const activeBoard = boards.find(b => b.name === boardName);
    return activeBoard || null;
}