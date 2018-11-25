//
Double bbb = null;
Double ddd = null;

try {
    bbb = Double.parseDouble(aaa);
    ddd = Double.parseDouble(ccc);
} catch (NumberFormatException e) { }

if (bbb != null && ddd != null) {
//
