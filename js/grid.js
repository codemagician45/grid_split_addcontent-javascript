$(document).ready(function () {

    /* Add and Remove Grid Cells */

    var rowNum = 2, colNum = 2, splitNum = 1, firstSplit = false, contentData = '', contentColor = '', contentDataPlus = '';
    var selected, myClass, targetDiv;

    $('#add_col').click(function () {
        if (colNum <= 11) {
            for (let i = 1; i <= rowNum; i++) {
                $('#row' + i).append('<div class="col-4 col-sm-3 col-md-2 col-lg-1 square-col-1 col-index" ><div class="embed-responsive embed-responsive-1by1 text-center"><div class="embed-responsive-item square"></div></div></div>');
            }
            rowNum = $('.row-index').length;
            colNum = ($('.col-index').length) / rowNum;
        }
        else
            alert("You can not add columns anymore")
    });

    $('#remove_col').click(function () {
        if (colNum > 2) {
            for (let i = 1; i <= rowNum; i++) {
                $('#row' + i).children().last().remove()
            }
            rowNum = $('.row-index').length;
            colNum = ($('.col-index').length) / rowNum;
        }
        else
            alert("You can not remove columns anymore");
    });

    $('#add_row').click(function () {
        if (rowNum < 12) {
            $('#grid').append('<div class="row square-row-center row-index" id="row' + (rowNum + 1) + '"></div>')
            for (let i = 1; i <= colNum; i++) {
                $('#row' + (rowNum + 1)).append('<div class="col-4 col-sm-3 col-md-2 col-lg-1 square-col-1 col-index" ><div class="embed-responsive embed-responsive-1by1 text-center"><div class="embed-responsive-item square"></div></div></div>');
            }
            rowNum = $('.row-index').length;
            colNum = ($('.col-index').length) / rowNum;
        }
        else
            alert("You can not add columns anymore")
    });

    $('#remove_row').click(function () {
        if (rowNum > 2) {
            $('#grid').children().last().remove();
            rowNum = $('.row-index').length;
            colNum = ($('.col-index').length) / rowNum;
        }
        else
            alert("You can not remove columns anymore");
    });

    /* Split and Add Content */
    // $('body').on('mouseenter', '.col-index', function () {
    //     $('.popup').remove();
    //     $(this).append('<div id="menu" class="popup"><ul><li><a href="" id="split">Split</a></li><li><a href="" id="add_content">Add</a></li><li><a href="" id="reset_content">Reset</a><a href="" id="close_popup">Close</a></li></ul></div>')
    // })

    $('body').on('click', '.col-index', function () {
        $('.popup').remove();
        $(this).append('<div id="menu" class="popup"><ul><li><a href="" id="split">Split</a></li><li><a href="" id="add_content">Add</a></li><li><a href="" id="reset_content">Reset</a></li></ul></div>')
        $('.col-index').on('mouseleave', function () {
            $('.popup').hide();
            splitNum = 1;
        });
        console.log(this.children[0].children[0].children.length)
        if (this.children[0].children[0].children.length != 0)
            $('#add_content').hide();
        $('#split').click(function (e) {
            e.preventDefault();
            var popupDiv = this.parentNode.parentNode.parentNode;

            var colIndex = popupDiv.parentNode;
            // if (colIndex.childNodes.length == 4) {
            //     var square = colIndex.childNodes[1];
            //     var final = square.childNodes[1];
            // }
            // if (colIndex.childNodes.length == 2) {
            //     var square = colIndex.childNodes[0];
            //     var final = square.childNodes[0];
            // }
            // console.log()
            var final = colIndex.children[0].children[0];
            switch (splitNum) {
                case 1:
                    final.innerHTML = '';
                    final.innerHTML += '<svg style="width: 100%; height: 100%;""><line x1="0" y1="100%" x2="100%" y2="0" style="stroke:rgb(85,85,85);stroke-width:2"/></svg><a href="" class="split_area 11"><div class="embed-responsive-item" style="width:49%; height:49%;;"></div></a><a href="" class="split_area 12"><div class="embed-responsive-item " style="width:49%; height:49%;;left: 51%; top: 51%;"></div></a>';
                    break;
                case 2:
                    final.innerHTML = '';
                    final.innerHTML += '<svg style="width: 100%; height: 100%;""><line x1="0" y1="100%" x2="100%" y2="0" style="stroke:rgb(85,85,85);stroke-width:2"/></svg><div class="embed-responsive-item" style="width:49%; height:49%;"><svg style="width: 100%; height: 100%;"><line x1="100%" y1="100%" x2="0%" y2="0" style="stroke:rgb(85,85,85);stroke-width:2"/></svg></div><a href="" class="split_area 21"><div class="embed-responsive-item " style="width:32%; height:32%; left:34%;"></div></a><a href="" class="split_area 22"><div class="embed-responsive-item " style="width: 32%; height: 32%; top:34%;"></div></a><a href="" class="split_area 12"><div class="embed-responsive-item " style="width: 49%; height: 49%;left: 51%; top: 51%;"></div></a>';
                    break;
                case 3:
                    final.innerHTML = '';
                    final.innerHTML += '<svg style="width: 100%; height: 100%;""><line x1="0" y1="100%" x2="100%" y2="0" style="stroke:rgb(85,85,85);stroke-width:2"/></svg><div class="embed-responsive-item " style="width:49%; height:49%;"><svg style="width: 100%; height: 100%;"><line x1="100%" y1="100%" x2="0%" y2="0" style="stroke:rgb(85,85,85);stroke-width:2"/></svg></div><div class="embed-responsive-item " style="width:49%; height:49%;;left: 51%; top: 51%"><svg style="width: 100%; height: 100%;"><line x1="100%" y1="100%" x2="0%" y2="0" style="stroke:rgb(85,85,85);stroke-width:2"/></svg></div><a href="" class="split_area 21"><div class="embed-responsive-item " style="width:32%; height:32%; left:34%;"></div></a><a href="" class="split_area 22"><div class="embed-responsive-item " style="width:32%; height:32%; top: 34%;"></div></a><a href="" class="split_area 23"><div class="embed-responsive-item " style="width:32%; height:32%; top: 68%; left:34%;"></div></a><a href="" class="split_area 24"><div class="embed-responsive-item " style="width:32%; height:32%; left:68%; top: 34%;"></div></a>';
                    break;
            }
            splitNum++;
            if (splitNum > 1)
                firstSplit = true;
            if (splitNum > 3) splitNum = 1;

        });
        $('#add_content').click(function (e) {
            e.preventDefault();
            targetDiv = this.parentNode.parentNode.parentNode.parentNode.children[0].children[0];
            myClass = targetDiv.classList[1];
            $('#add_modal').modal('show');
        });

        $('#reset_content').click(function (e) {
            e.preventDefault();
            console.log(this.parentNode.parentNode.parentNode.parentNode.children[0].children[0])
            this.parentNode.parentNode.parentNode.parentNode.children[0].children[0].innerHTML = '';
            this.parentNode.parentNode.parentNode.parentNode.children[0].children[0].style = '';
            splitNum = 1;
        });

        if (firstSplit)
            $(this).unbind('click')
    });

    $('body').on('click', '.split_area', function (e) {
        e.preventDefault();
        $('#add_modal').modal('show');
        selected = this.parentNode;
        myClass = $(this).attr('class');
    });

    var leftBtnArr = document.getElementsByClassName('btn-content-left');
    var rightBtnArr = document.getElementsByClassName('btn-content-right');
    var inputValue = '';

    $('#add_confirm').click(function () {
        $('#add_modal').modal('hide');
        switch (myClass) {
            case 'square':
                targetDiv.style.background = contentColor;
                targetDiv.innerHTML += '<p style="font-size: xx-large;margin: auto;color:black;height:60%">' + contentData + contentDataPlus + '</p>';
                if (inputValue) targetDiv.innerHTML += '<p style="color:black">' + inputValue + '</p>';
                break;
            case 'split_area 11':
                selected.innerHTML += '<div class="embed-responsive-item" style="width: 100%; height: 100%;clip-path:polygon(100% 0, 0 100%, 0 0);"></div>';
                selected.innerHTML += '<div class="embed-responsive-item" style="width:49%; height:49%;"><p style="font-size: x-large;margin: auto;color:black;height:70%">' + contentData + contentDataPlus + '</p></div>';
                selected.childNodes[selected.childNodes.length - 2].style.background = contentColor;
                if (inputValue) selected.childNodes[selected.childNodes.length - 1].innerHTML += '<p style="color:black">' + inputValue + '</p>';
                break;

            case 'split_area 12':
                selected.innerHTML += '<div class="embed-responsive-item" style="width: 100%; height: 100%;clip-path:polygon(100% 0, 0 100%, 100% 100%)"></div>';
                selected.innerHTML += '<div class="embed-responsive-item" style="width:49%; height:49%;left: 51%; top: 51%;"><p style="font-size: x-large;margin: auto;color:black;height:55%">' + contentData + contentDataPlus + '</p></div>';
                selected.childNodes[selected.childNodes.length - 2].style.background = contentColor;
                if (inputValue) selected.childNodes[selected.childNodes.length - 1].innerHTML += '<p style="color:black">' + inputValue + '</p>';
                break;

            case 'split_area 21':
                selected.innerHTML += '<div class="embed-responsive-item" style="width: 100%; height: 100%; clip-path:polygon(100% 0, 0 0, 50% 50%)"></div>';
                selected.innerHTML += '<div class="embed-responsive-item " style="width:32%; height:32%; left:34%;"><p style="margin: auto;color:black; height:70%">' + contentData + contentDataPlus + '</p></div>';
                selected.childNodes[selected.childNodes.length - 2].style.background = contentColor;
                if (inputValue) selected.childNodes[selected.childNodes.length - 1].innerHTML += '<p style="color:black;font-size:xx-small">' + inputValue + '</p>';
                break;

            case 'split_area 22':
                selected.innerHTML += '<div class="embed-responsive-item" style="width: 100%; height: 100%; clip-path:polygon(0 1%, 0% 100%, 50% 50%)"></div>';
                selected.innerHTML += '<div class="embed-responsive-item " style="width:32%; height:32%; top:34%;"><p style="margin: auto;color:black; height:70%">' + contentData + contentDataPlus + '</p></div>';
                selected.childNodes[selected.childNodes.length - 2].style.background = contentColor;
                if (inputValue) selected.childNodes[selected.childNodes.length - 1].innerHTML += '<p style="color:black;font-size:xx-small">' + inputValue + '</p>';
                break;

            case 'split_area 23':
                selected.innerHTML += '<div class="embed-responsive-item" style="width: 100%; height: 100%; clip-path:polygon(100% 100%, 0% 100%, 50% 50%);"></div>';
                selected.innerHTML += '<div class="embed-responsive-item " style="width:32%; height:32%; top:68%;left:34%;"><p style="margin: auto;color:black; height:70%">' + contentData + contentDataPlus + '</p></div>';
                selected.childNodes[selected.childNodes.length - 2].style.background = contentColor;
                if (inputValue) selected.childNodes[selected.childNodes.length - 1].innerHTML += '<p style="color:black;font-size:xx-small">' + inputValue + '</p>';
                break;
            case 'split_area 24':
                selected.innerHTML += '<div class="embed-responsive-item" style="width: 100%; height: 100%; clip-path:polygon(100% 100%, 100% 0, 50% 50%);;"></div>';
                selected.innerHTML += '<div class="embed-responsive-item " style="width:32%; height:32%; top:34%;left:68%;"><p style="margin: auto;color:black; height:55%">' + contentData + contentDataPlus + '</p></div>';
                selected.childNodes[selected.childNodes.length - 2].style.background = contentColor;
                if (inputValue) selected.childNodes[selected.childNodes.length - 1].innerHTML += '<p style="color:black;font-size:xx-small">' + inputValue + '</p>';
                break;

        }
        myClass = '';
        selected = '';
        contentColor = '';
        contentData = '';
        inputValue = '';
        $('#input-content').val('');
        for (let i = 0; i < leftBtnArr.length; i++) {
            leftBtnArr[i].style.backgroundColor = '#17a2b8';
        }

        rightBtnArr[0].style.backgroundColor = '#ff7675';
        rightBtnArr[1].style.backgroundColor = '#55efc4';
    });

    $('.btn-content-left').click(function () {
        for (let i = 0; i < leftBtnArr.length; i++) {
            leftBtnArr[i].style.backgroundColor = '#17a2b8';
        }
        this.style.backgroundColor = "grey";
        contentData = this.childNodes[0].data;
    });

    $('.btn-content-right').click(function () {
        rightBtnArr[0].style.backgroundColor = '#ff7675';
        rightBtnArr[1].style.backgroundColor = '#55efc4';
        contentColor = this.style.backgroundColor;
        this.style.backgroundColor = "grey";
        contentDataPlus = this.childNodes[0].innerText;
    });


    $('#input-content').change(function () {
        inputValue = $(this).val();
    });


    // var theToggle = document.getElementById('toggle');

    // // hasClass
    // function hasClass(elem, className) {
    //     return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    // }
    // // // addClass
    // // function addClass(elem, className) {
    // //     if (!hasClass(elem, className)) {
    // //         elem.className += ' ' + className;
    // //     }
    // // }
    // // // removeClass
    // // function removeClass(elem, className) {
    // //     var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    // //     if (hasClass(elem, className)) {
    // //         while (newClass.indexOf(' ' + className + ' ') >= 0) {
    // //             newClass = newClass.replace(' ' + className + ' ', ' ');
    // //         }
    // //         elem.className = newClass.replace(/^\s+|\s+$/g, '');
    // //     }
    // // }
    // // toggleClass
    // function toggleClass(elem, className) {
    //     var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
    //     if (hasClass(elem, className)) {
    //         while (newClass.indexOf(" " + className + " ") >= 0) {
    //             newClass = newClass.replace(" " + className + " ", " ");
    //         }
    //         elem.className = newClass.replace(/^\s+|\s+$/g, '');
    //     } else {
    //         elem.className += ' ' + className;
    //     }
    // }

    // theToggle.onclick = function () {
    //     console.log(this)
    //     toggleClass(this, 'on');
    //     return false;
    // }
});