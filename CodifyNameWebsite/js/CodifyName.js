/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
/**
 * Created by Vivek on 09/05/2015.
 * @class
 */
var CodifyNameJava = (function () {
    function CodifyNameJava() {
    }
    CodifyNameJava.prototype.CodifyName = function (input, name, EncodeMe) {
        var inputChar = (input).split('');
        var nameString = name.replace(new RegExp(" ", 'g'), "").split("");
        var temp = (nameString.slice(0).slice(0));
        nameString = temp.slice(0);
        var nameChar = (this.getString(nameString)).split('');
        var alphabets = ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,!%^&*-_=+[]{}#~\'@/?<>|1234567890(); ").split('');
        var listNamePositions = this.GetAlphabetPositions(nameChar, alphabets);
        while ((listNamePositions.length > 5))
            listNamePositions.splice(/* size */ listNamePositions.length - 1, 1);
        var posNamePermutations = this.GetPermutations(/* toArray */ listNamePositions.slice(0));
        var alphaPosNamePermutation = this.AssignAlphabetPositionPermutation(alphabets, posNamePermutations);
        var result = "";
        if (EncodeMe) {
            result = this.EncoderCodifyName(inputChar, alphabets, alphaPosNamePermutation);
        }
        else {
            result = this.DecoderCodifyName(inputChar, alphabets, alphaPosNamePermutation, /* size */ listNamePositions.length);
        }
        return result;
    };
    CodifyNameJava.prototype.getString = function (arr) {
        var builder = { str: "", toString: function () { return this.str; } };
        var _loop_1 = function (index409) {
            var s = arr[index409];
            {
                /* append */ (function (sb) { return sb.str = sb.str.concat(s); })(builder);
            }
        };
        for (var index409 = 0; index409 < arr.length; index409++) {
            _loop_1(index409);
        }
        return builder.str;
    };
    CodifyNameJava.prototype.DecoderCodifyName = function (inputDecode, alphabets, alphaPosNamePermutation, divide) {
        var alphaPos = ([]);
        var decodedString = "";
        for (var i = 0; i < inputDecode.length; i++) {
            /* add */ (alphaPos.push(alphabets.join('').indexOf(inputDecode[i])) > 0);
            if ((i + 1) % divide === 0) {
                decodedString += this.getKeyByValue(alphaPosNamePermutation, alphaPos);
                alphaPos = ([]);
            }
        }
        ;
        return decodedString;
    };
    CodifyNameJava.prototype.getKeyByValue = function (map, value) {
        {
            var array411 = (function (m) {
                if (m.entries == null)
                    m.entries = []; return m.entries;
            })(map);
            for (var index410 = 0; index410 < array411.length; index410++) {
                var entry = array411[index410];
                {
                    if ((function (a1, a2) {
                        if (a1 == null && a2 == null)
                            return true; if (a1 == null || a2 == null)
                            return false; if (a1.length != a2.length)
                            return false; for (var i = 0; i < a1.length; i++) {
                                if (a1[i] != a2[i])
                                    return false;
                            } return true;
                    })(entry.getValue(), value)) {
                        return entry.getKey();
                    }
                }
            }
        }
        return null;
    };
    CodifyNameJava.prototype.EncoderCodifyName = function (input, alphabets, alphaPosNamePermutation) {
        var encodedString = "";
        for (var indexInput = 0; indexInput < input.length; indexInput++) {
            var pos = (function (m, k) {
                if (m.entries == null)
                    m.entries = []; for (var i = 0; i < m.entries.length; i++)
                    if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                        return m.entries[i].value;
                    } return null;
            })(alphaPosNamePermutation, input[indexInput]);
            for (var indexPos = 0; indexPos < pos.length; indexPos++) {
                encodedString += alphabets[pos[indexPos]];
            }
            ;
        }
        ;
        return encodedString;
    };
    CodifyNameJava.prototype.AssignAlphabetPositionPermutation = function (alphabets, posPermutations) {
        var alphaPosPer = ({});
        for (var i = 0; i < alphabets.length; i++) {
            /* put */ (function (m, k, v) {
                if (m.entries == null)
                    m.entries = []; for (var i_1 = 0; i_1 < m.entries.length; i_1++)
                    if (m.entries[i_1].key.equals != null && m.entries[i_1].key.equals(k) || m.entries[i_1].key === k) {
                        m.entries[i_1].value = v;
                        return;
                    } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } });
            })(alphaPosPer, alphabets[i], /* get */ posPermutations[i]);
        }
        ;
        return alphaPosPer;
    };
    CodifyNameJava.prototype.GetAlphabetPositions = function (name, alphabets) {
        var pos = ([]);
        for (var index = 0; index < name.length; index++) {
            /* add */ (pos.push(alphabets.join('').indexOf(name[index])) > 0);
        }
        ;
        return pos;
    };
    CodifyNameJava.prototype.GetPermutations = function (num) {
        var result = ([]);
        /* add */ (result.push([]) > 0);
        for (var i = 0; i < num.length; i++) {
            var current = ([]);
            for (var index412 = 0; index412 < result.length; index412++) {
                var l = result[index412];
                {
                    for (var j = 0; j < l.length + 1; j++) {
                        /* add */ l.splice(j, 0, num[i]);
                        var temp = (l.slice(0));
                        /* add */ (current.push(temp) > 0);
                        /* remove */ l.splice(j, 1);
                    }
                    ;
                }
            }
            result = (current.slice(0));
        }
        ;
        return result;
    };
    return CodifyNameJava;
}());