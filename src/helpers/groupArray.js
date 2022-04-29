export default function groupArray() {
    const board = Array.from(Array(100).keys());
    return  board.reduce((acc, item, index) => {
      const currentIndex = index % 10;
      (acc[currentIndex] = acc[currentIndex] || []).push(item);
      return acc;
    }, []);
  }