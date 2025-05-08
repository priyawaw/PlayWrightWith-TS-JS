function findLongestCommonString (arr : string[]) : string {

    if (arr.length === 0) return ""
    let commonString = arr [0]

    for (let i=1; i<arr.length; i++) {
        let tempCommon = ''

        for (let j=0; j<commonString.length; j++) {
            if (commonString[j] === arr[i] [j]) {

                tempCommon += commonString[j]
            }
            else{
                break
            }
        }
        commonString = tempCommon
        if (commonString === '') break

        }
        return commonString
    }
    console.log(findLongestCommonString(['flower', 'flow', 'flight']))
    console.log(findLongestCommonString(['dog', 'racecar', 'car']))


