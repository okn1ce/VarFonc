<!-- Begin
var a1 = "<html><head>";
var a2 = "<title>nice</title>";
var a3 = "</head><body>";
var a4 = "</body></html>";
var a51 = "<font color=\"#008080\">";
var a52 = "</font>";
var bas = "<img src=\"fleches/fb.gif\" width=\"50\" height=\"50\">";
var haut = "<img src=\"fleches/fh.gif\" width=\"50\" height=\"50\">";

function reponse(form) {
    for (var i = 0; i < form.length; i++) {
        if (form[i].checked) {
            break
        }
    }
    var repondu = ""
    if (i < form.length) {
        repondu = form[i].value
    }
    return repondu;
}

function affiche(form) {
    var a = Array();
    var fdea = Array();
    var fga = Array();
    var fda = Array();
    var nb = 0;
    var auteur = "okn1ce";
    var fx = form.fx.value;
    var p = -3;
    var n = 0;
    var fdex = "";
    var fga = 0;
    var fda = 0;
    var fa = 0;
    var fb = 0;
    var texte = "";
    var deb = form.a.value;
    var end = form.b.value;
    var pas = 0;
    var c = deb;
    var fc = 0;
    var fgc = 0;
    var fdc = 0;
    var precis = 0;
    with(Math) {
        deb = eval(deb);
        end = eval(end);
    };
    n = eval(end - deb);
    if (n >= 1) {
        p = p + 1;
    };
    if (n >= 10) {
        p = p + 1;
    };
    if (n >= 1000) {
        p = p + 1;
    };
    fdex = traduction(fx, "x");
    a[0] = deb;
    fdea[0] = image(fdex, c, p);
    fb = image(fdex, end, p);
    pas = Math.pow(10, p);
    precis = Math.pow(10, eval(-p));
    n = eval(n / pas);
    n = Math.round(n);
    for (var i = 1; i <= n; i++) {
        c = eval(c + "+" + pas);
        fc = image(fdex, c, p);
        fgc = imagep(fdex, c, p, 1);
        fdc = imagep(fdex, c, p, 2);
        if (fdc * fgc < 0) {
            nb++;
            a[nb] = c;
            fdea[nb] = fc;
        };
    };
    if (fdea[nb] != fb) {
        nb++;
        fdea[nb] = fb;
        a[nb] = end;
    };
    for (var i = 0; i <= nb; i++) {
        a[i] = arrondi(a[i], precis);
        fdea[i] = arrondi(fdea[i], precis);
    };
    texte = "<table width=\"%\" border=\"1\" cellspacing=\"0\" bordercolor=\"#3333FF\">";
    texte = texte + "<tr align=\"center\"><td width=\"%\" nowrap>x</td>";
    for (var i = 0; i <= nb; i++) {
        texte = texte + "<td width=\"%\" nowrap>" + a[i] + "</td>";
        if (i != nb) {
            texte = texte + "<td width=\"50\" nowrap>&nbsp;</td>";
        };
    };
    texte = texte + "</tr>";
    texte = texte + "<tr align=\"center\"><td width=\"%\" nowrap><i>f(x)</i></td>";
    for (var i = 0; i <= nb; i++) {
        if (fdea[i] < fdea[eval(i + 1)]) {
            texte = texte + "<td width=\"%\" nowrap valign=\"bottom\">" + fdea[i] + "</td><td width=\"50\" nowrap height=\"82\">" + haut + "</td>";
        };
        if (fdea[i] > fdea[eval(i + 1)]) {
            texte = texte + "<td width=\"%\" nowrap valign=\"top\">" + fdea[i] + "</td><td width=\"50\" nowrap height=\"82\">" + bas + "</td>";
        };
    };
    if (fdea[nb] > fdea[nb - 1]) {
        texte = texte + "<td width=\"%\" nowrap valign=\"top\">" + fdea[nb] + "</td>";
    };
    if (fdea[nb] < fdea[nb - 1]) {
        texte = texte + "<td width=\"%\" nowrap valign=\"bottom\">" + fdea[nb] + "</td>";
    };
    texte = texte + "</tr>";
    texte = texte + "</table>";
    texte = a1 + a2 + a3 + "<br>" + texte + a4;
    document.write(texte);
}

function traduction(chaine, variable) {
    var fction = Array();
    var fctionp = Array();
    var nombre = Array();
    var base = Array();
    var chpar = Array();
    var coef = 0;
    var coefp = 0;
    var res = "";
    var reg;
    var reg1;
    var ajout = "";
    var nbpar = 0;
    var res1;
    var res3;
    var res2 = 0;
    res = chaine;
    fction[0] = "abs";
    fction[1] = "acos";
    fction[2] = "asin";
    fction[3] = "atan";
    fction[4] = "ceil";
    fction[5] = "cos";
    fction[6] = "exp";
    fction[7] = "floor";
    fction[8] = "log";
    fction[9] = "max";
    fction[10] = "min";
    fction[11] = "random";
    fction[12] = "round";
    fction[13] = "sin";
    fction[14] = "sqrt";
    fction[15] = "tan";
    reg = new RegExp("([0-9])([a-z\(])", "g");
    while (reg.test(res)) {
        res = res.replace(reg, "$1*$2");
    };
    reg.compile("-([a-z\(])", "g");
    while (reg.test(res)) {
        res = res.replace(reg, "-1*$1");
    };
    res = res.replace(/int\(/g, "floor(");
    res = res.replace(/ln\(/g, "log(");
    chpar = chaine.split("(");
    nbpar = eval(chpar.length - 1);
    ajout = "\[0-9a-z\\*\\+\\/\\-\\.\\^]*"
    base[0] = "[0-9a-z\\.]+";
    base[1] = "\\(" + ajout + "\\)";
    for (var i = 2; i <= nbpar; i++) {
        base[i] = "\\(" + ajout + base[i - 1] + ajout + "\\)";
    };
    for (var i = nbpar; i >= 0; i--) {
        reg = new RegExp("(" + base[i] + "\\^)", "g");
        if (i != 0) {
            res = res.replace(reg, "pow$1");
        } else {
            res = res.replace(reg, "pow($1");
        };
    };
    chpar = res.split("(");
    nbpar = eval(chpar.length - 1);
    for (var i = nbpar; i >= 0; i--) {
        reg.compile("(\\^" + base[i] + ")", "g");
        if (i != 0) {
            res = res.replace(reg, ",$1");
        } else {
            res = res.replace(reg, ",$1)");
        };
    };
    res = res.replace(/,\^/g, ",");
    res = res.replace(/\^\(/g, ",");
    res = res.replace(/\),/g, ",");
    res = res.replace(/,\(/g, ",");
    reg.compile(variable, "g");
    res = res.replace(reg, "v");
    for (var i = 0; i <= 15; i++) {
        res3 = fction[i];
        res3 = res3.replace(reg, "v");
        fctionp[i] = res3;
    };
    for (var i = 0; i <= 15; i++) {
        reg.compile(fctionp[i], "g");
        res = res.replace(reg, fction[i]);
    };
    return res;
}

function image(f, x, p) {
    var pu = Math.pow(10, eval(-p));
    var ch = f;
    ch = ch.replace(/v/g, x);
    with(Math) {
        v = eval(ch);
    };
    v = arrondi(v, pu);
    return v;
}

function imagep(f, x, p, k) {
    var pu1 = Math.pow(10, p);
    var ch1 = f;
    var ch2 = f;
    var ch = "";
    var x1 = eval(x);
    var x2 = 0;
    var v1 = 0;
    var v2 = 0;
    var v = 0;
    if (k == 1) {
        x2 = eval(x - pu1);
    };
    if (k == 2) {
        x2 = eval(x + pu1);
    };
    ch1 = ch1.replace(/v/g, x1);
    ch2 = ch2.replace(/v/g, x2);
    with(Math) {
        v1 = eval(ch1);
        v2 = eval(ch2);
    };
    v = eval(eval(v2 - v1) / eval(x2 - x1));
    return v;
}

function arrondi(x, choix) {
    var retour = eval(x * choix);
    var tronc = Math.round(retour);
    tronc = eval(tronc / choix);
    return tronc;
}