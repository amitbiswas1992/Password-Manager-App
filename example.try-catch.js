function doWork() {
    throw new Error('Unable to do  work !');
}

try {
    doWork();
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Finally blocked excution');
}

console.log('Try catch ended ');