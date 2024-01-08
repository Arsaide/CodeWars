function groupAnagrams(words){
    const map = {};
    for(const s of words) {
        const key = s.split('').sort().join('');
        if(map[key]) {
            map[key].push(s);
        } else {
            map[key] = [s];
        }
    }
    return Object.values(map);
}