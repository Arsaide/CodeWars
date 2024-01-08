function unpackSausages(truck) {
    return truck.flat()
        .filter(s => /\[(.)\1{3}\]/.test(s))
        .filter((_, i) => i === 0 || (i + 1) % 5 !== 0)
        .flatMap(s => s.slice(1, 5).split(""))
        .join(" ");
}