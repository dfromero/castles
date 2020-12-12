const isRepeated = (landStretch, index) => (index < landStretch.length - 1) && (landStretch[index] === landStretch[index +1])

const isPeak = (value, prev, next) => (value > prev) && (value > next)

const isValley = (value, prev, next) => (value < prev) && (value < next)

const isPeakOrValley = (value, prev, next) =>  isPeak(value, prev, next) || isValley(value, prev, next)

const countPossibleCastles = landStretch => {
    // start at 1, since we always count start + end
    let index = 1;
    let peakOrValley = 0;

    // handle non empty array & only when there's a next number to compare to, since we always count last
    while(landStretch.length > 0 && landStretch[index + 1]) {
        // store before possible repeated sequence
        let prevIndex = index - 1;

        while (isRepeated(landStretch, index)) {
            index += 1;
        }

        const previousValue = landStretch[prevIndex];
        const currentValue = landStretch[index];
        const nextValue = landStretch[index + 1];

        if (isPeakOrValley(currentValue, previousValue, nextValue)) {
            peakOrValley += 1;
        }

        index += 1;
    }

    if(landStretch.length > 2) {
        return peakOrValley + 2;
    } else if(landStretch.length === 2 && landStretch[0] === landStretch[1]) {
        // edge case ie. [1,1]
        return 1;
    } else {
        return landStretch.length;
    }
}

module.exports = countPossibleCastles;
