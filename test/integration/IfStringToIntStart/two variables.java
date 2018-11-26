//
Integer bbb = null;
Integer ddd = null;

try {
    bbb = Integer.parseInt(aaa);
    ddd = Integer.parseInt(ccc);
} catch (NumberFormatException e) { }

if (bbb != null && ddd != null) {
//
