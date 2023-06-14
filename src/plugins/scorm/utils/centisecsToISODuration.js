export const centisecsToISODuration = n => {
    n = Math.max(n, 0);

    let str = 'P';
    let nCs = n;

    let nY = Math.floor(nCs / 3155760000);
    nCs -= nY * 3155760000;
    let nM = Math.floor(nCs / 262980000);
    nCs -= nM * 262980000;
    let nD = Math.floor(nCs / 8640000);
    nCs -= nD * 8640000;
    let nH = Math.floor(nCs / 360000);
    nCs -= nH * 360000;
    let nMin = Math.floor(nCs / 6000);
    nCs -= nMin * 6000;

    if (nY > 0) str += nY + 'Y';
    if (nM > 0) str += nM + 'M';
    if (nD > 0) str += nD + 'D';

    if ((nH > 0) || (nMin > 0) || (nCs > 0)) {
        str += 'T';
        if (nH > 0) str += nH + 'H';
        if (nMin > 0) str += nMin + 'M';
        if (nCs > 0) str += (nCs / 100) + 'S';
    }

    if (str === 'P') str = 'PT0H0M0S';

    return str;
};
