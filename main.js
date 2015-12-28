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

function r_keypressed() {
    rotate(r_rotation);
    print_cube();
    check_solved();
}

function R_keypressed() {
    rotate(r_rotation);
    rotate(r_rotation);
    rotate(r_rotation);
    print_cube();
    check_solved();
}

function u_keypressed() {
    rotate(u_rotation);
    print_cube();
    check_solved();
}

function U_keypressed() {
    rotate(u_rotation);
    rotate(u_rotation);
    rotate(u_rotation);
    print_cube();
    check_solved();
}

function f_keypressed() {
    rotate(f_rotation);
    print_cube();
    check_solved();
}

function F_keypressed() {
    rotate(f_rotation);
    rotate(f_rotation);
    rotate(f_rotation);
    print_cube();
    check_solved();
}

function l_keypressed() {
    rotate(l_rotation);
    print_cube();
    check_solved();
}

function L_keypressed() {
    rotate(l_rotation);
    rotate(l_rotation);
    rotate(l_rotation);
    print_cube();
    check_solved();
}

function d_keypressed() {
    rotate(d_rotation);
    print_cube();
    check_solved();
}

function D_keypressed() {
    rotate(d_rotation);
    rotate(d_rotation);
    rotate(d_rotation);
    print_cube();
    check_solved();
}

function b_keypressed() {
    rotate(b_rotation);
    print_cube();
    check_solved();
}

function B_keypressed() {
    rotate(b_rotation);
    rotate(b_rotation);
    rotate(b_rotation);
    print_cube();
    check_solved();
}

function m_keypressed() {
    rotate(m_rotation);
    print_cube();
    check_solved();
}

function M_keypressed() {
    rotate(m_rotation);
    rotate(m_rotation);
    rotate(m_rotation);
    print_cube();
    check_solved();
}

function x_keypressed() {
    rotate(l_rotation);
    rotate(l_rotation);
    rotate(l_rotation);
    rotate(m_rotation);
    rotate(m_rotation);
    rotate(m_rotation);
    rotate(r_rotation);
    print_cube();
}

function X_keypressed() {
    rotate(l_rotation);
    rotate(m_rotation);
    rotate(r_rotation);
    rotate(r_rotation);
    rotate(r_rotation);
    print_cube();
}

function y_keypressed() {
    rotate(u_rotation);
    rotate(e_rotation);
    rotate(e_rotation);
    rotate(e_rotation);
    rotate(d_rotation);
    rotate(d_rotation);
    rotate(d_rotation);
    print_cube();
}

function Y_keypressed() {
    rotate(u_rotation);
    rotate(u_rotation);
    rotate(u_rotation);
    rotate(e_rotation);
    rotate(d_rotation);
    print_cube();
}

$(document).keydown(function(event) {
    switch (event.keyCode) {
    case 37: // left (y)
        y_keypressed();
        break;

    case 39: // right (Y)
        Y_keypressed();
        break;

    case 38: // up (x)
        x_keypressed()
        break;

    case 40: // down (X)
        X_keypressed();
        break;
    }
});

$(document).keypress(function(event) {
    switch (String.fromCharCode(event.which)) {
    case "u":
        u_keypressed();
        break;

    case "U":
        U_keypressed();
        break;

    case "r":
        r_keypressed();
        break;

    case "R":
        R_keypressed();
        break;

    case "m":
        m_keypressed();
        break;

    case "M":
        M_keypressed();
        break;

    case "f":
        f_keypressed();
        break;

    case "F":
        F_keypressed();
        break;

    case "l":
        l_keypressed();
        break;

    case "L":
        L_keypressed();
        break;

    case "d":
        d_keypressed();
        break;

    case "D":
        D_keypressed();
        break;

    case "b":
        b_keypressed();
        break;

    case "B":
        B_keypressed();
        break;

    case "e":
        rotate(e_rotation);
        print_cube();
        check_solved();
        break;

    case "E":
        rotate(e_rotation);
        rotate(e_rotation);
        rotate(e_rotation);
        print_cube();
        check_solved();
        break;

    case "s":
        rotate(s_rotation);
        print_cube();
        check_solved();
        break;

    case "S":
        rotate(s_rotation);
        rotate(s_rotation);
        rotate(s_rotation);
        print_cube();
        check_solved();
        break;

    case "x":
    case "k":
        x_keypressed();
        break;

    case "X":
    case "j":
        X_keypressed();
        break;

    case "y":
    case "h":
        y_keypressed();
        break;

    case "Y":
    case "H":
        Y_keypressed();
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
    $("#button_r").click(r_keypressed);
    $("#button_R").click(R_keypressed);
    $("#button_u").click(u_keypressed);
    $("#button_U").click(U_keypressed);
    $("#button_f").click(f_keypressed);
    $("#button_F").click(F_keypressed);
    $("#button_l").click(l_keypressed);
    $("#button_L").click(L_keypressed);
    $("#button_d").click(d_keypressed);
    $("#button_D").click(D_keypressed);
    $("#button_b").click(b_keypressed);
    $("#button_B").click(B_keypressed);
    $("#button_m").click(m_keypressed);
    $("#button_M").click(M_keypressed);
    $("#button_left").click(y_keypressed);
    $("#button_right").click(Y_keypressed);
    $("#button_up").click(x_keypressed);
    $("#button_down").click(X_keypressed);
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
    for (var i = 0; i < 6; i++) {
        for (var j = 1; j < 9; j++) {
            if (cube[i * 9 + j] != cube[i * 9]) {
                return false;
            }
        }
    }
    return true;
}

function check_solved() {
    if (is_solved()) {
        print_cube();
        alert("Solved!");
    }
}

function rotate(rotation) {
    var temp_cube = [];
    for (var i = 0; i < 54; i++) {
        temp_cube.push(cube[i]);
    }
    for (var i = 0; i < rotation.length; i++) {
        cube[rotation[i++]] = temp_cube[rotation[i]];
    }
}

function print_cube() {
    function get_one_line(a, b, c) {
        var line = "";
        var colors = [
            "yellow",
            "DarkOrange",
            "blue",
            "red",
            "green",
            "white"
            ];
            line += "<td class=\"left-border\" style=\"background:" + colors[cube[a]] + ";\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";
            line += "<td style=\"background:" + colors[cube[b]] + ";\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";
            line += "<td class=\"right-border\" style=\"background:" + colors[cube[c]] + ";\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>";
            return line;
    }
    var empty_line = "<td></td><td></td><td></td>";
    var table = "";
    table += "<table border=\"0\">";

    table += "<tr class=\"top-border\">";
    table += empty_line;
    table += get_one_line(0, 1, 2);
    table += empty_line;
    table += empty_line;
    table += "</tr>";

    table += "<tr>";
    table += empty_line;
    table += get_one_line(3, 4, 5);
    table += empty_line;
    table += empty_line;
    table += "</tr>";

    table += "<tr>";
    table += empty_line;
    table += get_one_line(6, 7, 8);
    table += empty_line;
    table += empty_line;
    table += "</tr>";

    table += "<tr class=\"top-border\">";
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

    table += "<tr class=\"bottom-border\">";
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
