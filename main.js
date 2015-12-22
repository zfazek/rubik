var cube = [];

var u_rotation = [ 
    0, 6, 1, 3, 2, 0, 5, 1, 8, 2, 7, 5, 6, 8, 3, 7,
    38, 11, 37, 10, 36, 9, 29, 38, 28, 37, 27, 36,
    20, 29, 19, 28, 18, 27, 9, 18, 10, 19, 11, 20
];

var r_rotation = [
    2, 20, 5, 23, 8, 26, 20, 47, 23, 50, 26, 53,
    47, 42, 50, 39, 53, 36, 42, 2, 39, 5, 36, 8,
    27, 33, 28, 30, 29, 27, 32, 28, 35, 29, 34, 32, 33, 35, 30, 34
];

var m_rotation = [
    1, 43, 4, 40, 7, 37, 19, 1, 22, 4, 25, 7,
    46, 19, 49, 22, 52, 25, 37, 52, 40, 49, 43, 46
];

var f_rotation = [
    18, 24, 19, 21, 20, 18, 21, 25, 23, 19, 24, 26, 25, 23, 26, 20,
    6, 17, 7, 14, 8, 11, 27, 6, 30, 7, 33, 8,
    47, 27, 46, 30, 45, 33, 17, 47, 14, 46, 11, 45
];

var l_rotation = [
    9, 15, 10, 12, 11, 9, 12, 16, 14, 10, 15, 17, 16, 14, 17, 11,
    0, 44, 3, 41, 6, 38, 18, 0, 21, 3, 24, 6, 45, 18, 48, 21, 51, 24,
    44, 45, 41, 48, 38, 51
];

var d_rotation = [
    45, 51, 46, 48, 47, 45, 48, 52, 50, 46, 51, 53, 52, 50, 53, 47,
    15, 42, 16, 43, 17, 44, 24, 15, 25, 16, 26, 17,
    33, 24, 34, 25, 35, 26, 42, 33, 43, 34, 44, 35
];

var b_rotation = [
    36, 42, 37, 39, 38, 36, 39, 43, 41, 37, 42, 44, 43, 41, 44, 38,
    2, 35, 1, 32, 0, 29, 9, 2, 12, 1, 15, 0,
    51, 9, 52, 12, 53, 15, 35, 51, 32, 52, 29, 53
];

var e_rotation = [
    12, 39, 13, 40, 14, 41, 21, 12, 22, 13, 23, 14,
    30, 21, 31, 22, 32, 23, 39, 30, 40, 31, 41, 32
];

var s_rotation = [
    3, 16, 4, 13, 5, 10, 28, 3, 31, 4, 34, 5,
    50, 28, 49, 31, 48, 34, 16, 50, 13, 49, 10, 48
];

var rotations = [
    u_rotation,
    r_rotation,
    m_rotation,
    f_rotation,
    l_rotation,
    d_rotation,
    b_rotation,
    e_rotation,
    s_rotation
];

$(document).keypress(function(event) {
    switch (String.fromCharCode(event.which)) {
        case "u":
            rotate(u_rotation);
            print_cube();
            break;

        case "U":
            rotate(u_rotation);
            rotate(u_rotation);
            rotate(u_rotation);
            print_cube();
            break;

        case "r":
            rotate(r_rotation);
            print_cube();
            break;

        case "R":
            rotate(r_rotation);
            rotate(r_rotation);
            rotate(r_rotation);
            print_cube();
            break;

        case "m":
            rotate(m_rotation);
            print_cube();
            break;

        case "M":
            rotate(m_rotation);
            rotate(m_rotation);
            rotate(m_rotation);
            print_cube();
            break;

        case "f":
            rotate(f_rotation);
            print_cube();
            break;

        case "F":
            rotate(f_rotation);
            rotate(f_rotation);
            rotate(f_rotation);
            print_cube();
            break;

        case "l":
            rotate(l_rotation);
            print_cube();
            break;

        case "L":
            rotate(l_rotation);
            rotate(l_rotation);
            rotate(l_rotation);
            print_cube();
            break;

        case "d":
            rotate(d_rotation);
            print_cube();
            break;

        case "D":
            rotate(d_rotation);
            rotate(d_rotation);
            rotate(d_rotation);
            print_cube();
            break;

        case "b":
            rotate(b_rotation);
            print_cube();
            break;

        case "B":
            rotate(b_rotation);
            rotate(b_rotation);
            rotate(b_rotation);
            print_cube();
            break;

        case "e":
            rotate(e_rotation);
            print_cube();
            break;

        case "E":
            rotate(e_rotation);
            rotate(e_rotation);
            rotate(e_rotation);
            print_cube();
            break;

        case "s":
            rotate(s_rotation);
            print_cube();
            break;

        case "S":
            rotate(s_rotation);
            rotate(s_rotation);
            rotate(s_rotation);
            print_cube();
            break;

        case "x":
            rotate(l_rotation);
            rotate(l_rotation);
            rotate(l_rotation);
            rotate(m_rotation);
            rotate(m_rotation);
            rotate(m_rotation);
            rotate(r_rotation);
            print_cube();
            break;

        case "X":
            rotate(l_rotation);
            rotate(m_rotation);
            rotate(r_rotation);
            rotate(r_rotation);
            rotate(r_rotation);
            print_cube();
            break;

        case "y":
            rotate(u_rotation);
            rotate(e_rotation);
            rotate(e_rotation);
            rotate(e_rotation);
            rotate(d_rotation);
            rotate(d_rotation);
            rotate(d_rotation);
            print_cube();
            break;

        case "Y":
            rotate(u_rotation);
            rotate(u_rotation);
            rotate(u_rotation);
            rotate(e_rotation);
            rotate(d_rotation);
            print_cube();
            break;

        case "z":
            rotate(f_rotation);
            rotate(s_rotation);
            rotate(b_rotation);
            rotate(b_rotation);
            rotate(b_rotation);
            print_cube();
            break;

        case "Z":
            rotate(f_rotation);
            rotate(f_rotation);
            rotate(f_rotation);
            rotate(s_rotation);
            rotate(s_rotation);
            rotate(s_rotation);
            rotate(b_rotation);
            print_cube();
            break;

    }
});

function readyFn() {
    $("#button_solve").click(solve);
    $("#button_shuffle").click(shuffle);
    init_cube();
    print_cube();
}

function solve() {
    init_cube();
    print_cube();
}

function shuffle() {
    var size = rotations.length;
    for (var i = 0; i < $("#select_rotations").val(); i++) {
        var random = Math.floor((Math.random() * size));
        if (Math.random() < 0.5) {
            rotate(rotations[random]);
        } else {
            rotate(rotations[random]);
            rotate(rotations[random]);
            rotate(rotations[random]);
        }
    }
    print_cube();
}

function init_cube() {
    cube = [];
    for (var i = 0; i < 54; i++) {
        cube.push(Math.floor(i / 9));
    }
}

function is_solved() {
    for (var i = 0; i < 54; i++) {
        if (cube[i] != Math.floor(i / 9)) {
            return false;
        }
    }
    return true;
}

function is_solved_anyhow() {
    for (var i = 0; i < 6; i++) {
        for (var j = 1; j < 9; j++) {
            if (cube[i * 9 + j] != cube[i * 9]) {
                return false;
            }
        }
    }
    return true;
}

function rotate(rotation) {
    var temp_cube = [];
    for (var i = 0; i < 54; i++) {
        temp_cube.push(cube[i]);
    }
    for (var i = 0; i < rotation.length; i++) {
        cube[rotation[i++]] = temp_cube[rotation[i]];
    }
    if (is_solved_anyhow()) {
        print_cube();
        alert("Solved!");
    }
}

function print_cube() {
    function get_color(c) {
        var colors = [
            "yellow",
            "DarkOrange",
            "blue",
            "red",
            "green",
            "white"
            ];
        return "<td style=\"background:" + colors[cube[c]] + ";\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";

    }
    function get_one_line(a, b, c) {
        var line = "";
        line += get_color(a);
        line += get_color(b);
        line += get_color(c);
        return line;
    }
    var empty_line = "<td></td><td></td><td></td>";
    var table = "";
    table += "<table border=\"0\">";
    table += "<tr>";
    table += "<td></td><td></td><td>B'</td>";
    table += get_one_line(0, 1, 2);
    table += "<td>B</td><td></td><td></td>";
    table += empty_line;
    table += "</tr>";

    table += "<tr>";
    table += "<td></td><td></td><td>S</td>";
    table += get_one_line(3, 4, 5);
    table += "<td>S'</td><td></td><td></td>";
    table += empty_line;
    table += "</tr>";

    table += "<tr>";
    table += "<td></td><td></td><td>F</td>";
    table += get_one_line(6, 7, 8);
    table += "<td>F'</td><td></td><td></td>";
    table += empty_line;
    table += "</tr>";

    table += "<tr>";
    table += get_one_line(9, 10, 11);
    table += get_one_line(18, 19, 20);
    table += get_one_line(27, 28, 29);
    table += get_one_line(36, 37, 38);
    table += "</tr>";

    table += "<tr>";
    table += get_one_line(12, 13, 14);
    table += get_one_line(21, 22, 23);
    table += get_one_line(30, 31, 32);
    table += get_one_line(39, 40, 41);
    table += "</tr>";

    table += "<tr>";
    table += get_one_line(15, 16, 17);
    table += get_one_line(24, 25, 26);
    table += get_one_line(33, 34, 35);
    table += get_one_line(42, 43, 44);
    table += "</tr>";

    table += "<tr>";
    table += empty_line;
    table += get_one_line(45, 46, 47);
    table += empty_line;
    table += empty_line;
    table += "</tr>";

    table += "<tr>";
    table += empty_line;
    table += get_one_line(48, 49, 50);
    table += empty_line;
    table += empty_line;
    table += "</tr>";

    table += "<tr>";
    table += empty_line;
    table += get_one_line(51, 52, 53);
    table += empty_line;
    table += empty_line;
    table += "</tr>";
    table += "</table>";

    $("#table_2d").html(table);
}

function log(line) {
    $("#tmp").html(line);
}
