//
float bbb = null;

try {
    bbb = Float.parseFloat(aaa);
} catch (NumberFormatException e) { }

if (bbb != null) {
    // ...
}
//
