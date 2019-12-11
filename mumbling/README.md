
## TESTS
* accum("a") => "A"

* accum("ab") => "A-Bb"

* accum("abc") => "A-Bb-Ccc"

* accum("abcd") -> "A-Bb-Ccc-Dddd"

* accum("cwAt") -> "C-Ww-Aaa-Tttt"

* accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
