/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */

const rightWay = (s, dictionary) => {
    const wordSet = new Set(dictionary);
    const dp = new Array(s.length + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= s.length; i++) {
        dp[i] = dp[i - 1] + 1; // По умолчанию добавляем 1 символ
        for (let j = 1; j <= i; j++) {
            const substring = s.slice(i - j, i); // Строка с индекса i - j до i
            if (wordSet.has(substring)) {
                dp[i] = Math.min(dp[i], dp[i - j]); // Минимальное количество символов
            }
        }
    }

    return dp[s.length];
}

const slowButMyWay = (s, dictionary) => {
    const set = new Set();
    const trie = (input, skipped) => {
        for (let i = 0; i < input.length; i++) {
            const substring = input.slice(i);
            for (const word of dictionary) {
                if (substring.startsWith(word)) {
                    trie(substring.slice(word.length), skipped);
                }
            }
            skipped++;
        }
        set.add(skipped);
    }
    trie(s, 0);
    return Math.min(...set);
}


// console.log(minExtraChar(s = "rkmsilizktprllwoimafyuqmeqrujxdzgp", dictionary = [
// "afy","lyso","ymdt","uqm","cfybt","lwoim","hdzeg","th","rkmsi","d","e","tp","r","jx","tofxe","etjx","llqs","cpir","p","ncz","ofeyx","eqru","l","demij","tjky","jgodm","y","ernt","jfns","akjtl","wt","tk","zg","lxoi","kt"
// ]));
const res1 = rightWay(s = "rkmsilizktprllwoimafyuqmeqrujxdzgp",
    dictionary =
        ["afy", "lyso", "ymdt", "uqm", "cfybt", "lwoim", "hdzeg", "th", "rkmsi", "d", "e", "tp", "r", "jx", "tofxe", "etjx", "llqs", "cpir", "p", "ncz", "ofeyx", "eqru", "l", "demij", "tjky", "jgodm", "y", "ernt", "jfns", "akjtl", "wt", "tk", "zg", "lxoi", "kt"]);
const res2 = rightWay(s = 'leetscode', dictionary = ['leet', 'code', 'leetcode']);

const res3 = rightWay("sayhelloworld", ["hello", "world"]);

const res4 = rightWay(
    "dwmodizxvvbosxxw", [
        "ox", "lb", "diz", "gu", "v", "ksv", "o", "nuq", "r", "txhe", "e", "wmo", "cehy", "tskz", "ds", "kzbu"])


const res5 = rightWay("ecolloycollotkvzqpdaumuqgs", ["flbri", "uaaz", "numy", "laper", "ioqyt", "tkvz", "ndjb", "gmg", "gdpbo", "x", "collo", "vuh", "qhozp", "iwk", "paqgn", "m", "mhx", "jgren", "qqshd", "qr", "qpdau", "oeeuq", "c", "qkot", "uxqvx", "lhgid", "vchsk", "drqx", "keaua", "yaru", "mla", "shz", "lby", "vdxlv", "xyai", "lxtgl", "inz", "brhi", "iukt", "f", "lbjou", "vb", "sz", "ilkra", "izwk", "muqgs", "gom", "je"])

const res6 = rightWay("enknouowgowcipfipojlrpuowgoiogiiebfjiafwksaigjyd", ["gw", "lq", "yzqch", "sah", "giieb", "kfqczw", "qxqz", "jb", "ucxmpe", "hpwr", "y", "vzlhe", "i", "kn", "ip", "iafwk", "zl", "dw", "yhxeqi", "egktb", "xasq", "f", "c", "vrllz", "p", "uowgo", "pgxd", "gnjgkm", "rnug", "sa", "vfccq", "j"])

console.log(res5);