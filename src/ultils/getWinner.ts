export default function getWinner(
  arr: Array<string[]>,
  clickTag: string,
  winAmount: number,
  { row, col }: { row: number; col: number }
): { win: boolean; winner: string | null } {
  let isWinnerOut = false;
  arr.some((_, i) => {
    if (i === row) {
      isWinnerOut = arr[i].some((_, j) => {
        if (j > arr[i].length - winAmount) return false;
        let isWin = false;
        for (let k = j; k < winAmount + j; k++) {
          isWin = arr[i]?.[k] === clickTag;
          if (!isWin) break;
        }
        return isWin;
      });
      console.log("row", isWinnerOut);
      if (!isWinnerOut) {
        isWinnerOut = arr.some((_, j) => {
          if (j > arr.length - winAmount) return false;
          let isWin = false;
          for (let k = j; k < winAmount + j; k++) {
            isWin = arr[k]?.[col] === clickTag;
            if (!isWin) break;
          }
          return isWin;
        });
        console.log("col", isWinnerOut);
      }

      if (!isWinnerOut) {
        isWinnerOut = arr.some((_, j) => {
          if (j !== i) return false;
          let isWin = false;
          let totalWin = false;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            isWin = arr[k]?.[col + d] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[j - d]?.[col - d] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[j + 1 - d]?.[col + d - 1] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[j + 2 - d]?.[col + d - 2] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[j + 3 - d]?.[col + d - 3] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[j + 4 - d]?.[col + d - 4] === clickTag;
            if (!isWin) break;
          }
          return isWin;
        });
        console.log("up", isWinnerOut);
      }

      if (!isWinnerOut) {
        isWinnerOut = arr.some((_, j) => {
          if (j !== i) return false;
          let isWin = false;
          let totalWin = false;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            isWin = arr[j - d]?.[col - d] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[j + d]?.[col + d] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[k - 1]?.[col + d - 1] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[k - 2]?.[col + d - 2] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[k - 3]?.[col + d - 3] === clickTag;
            if (!isWin) break;
          }
          totalWin = isWin;
          for (let k = j, d = 0; k < winAmount + j; k++, d++) {
            if (totalWin) break;
            isWin = arr[k - 4]?.[col + d - 4] === clickTag;
            if (!isWin) break;
          }
          return isWin;
        });
        console.log("down", isWinnerOut);
      }

      return isWinnerOut;
    }
    return false;
  });

  return { win: isWinnerOut, winner: isWinnerOut ? clickTag : null };
}
