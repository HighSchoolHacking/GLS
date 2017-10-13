//
float bbb = null;
float ddd = null;

try {
    bbb = Float.parseFloat(aaa);
    ddd = Float.parseFloat(ccc);
} catch (NumberFormatException e) { }

if (bbb != null && ddd != null) {
//
