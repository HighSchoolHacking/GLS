//
int bbb = null;
int ddd = null;

try {
    bbb = Int.parseInt(aaa);
    ddd = Int.parseInt(ccc);
} catch (NumberFormatException e) { }

if (bbb != null && ddd != null) {
//
