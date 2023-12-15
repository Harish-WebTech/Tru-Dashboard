document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("shownav");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  jQuery(function ($) {
    var path = window.location.href;
    $(".nav a").each(function () {
      if (this.href === path) {
        $(".nav a").removeClass("active");
        $(this).addClass("active");
      }
    });
  });

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});

$(document).ready(function () {
  $("#dataTable").DataTable();
  $("#dataTable2").DataTable();
  $("#viewdsmtabColoums").DataTable();
});

$(document).ready(function () {
  const uploadArea = document.querySelector("#uploadArea");
  const dropZoon = document.querySelector("#dropZoon");
  const loadingText = document.querySelector("#loadingText");
  const fileInput = document.querySelector("#fileInput");
  const previewImage = document.querySelector("#previewImage");
  const fileDetails = document.querySelector("#fileDetails");
  const uploadedFile = document.querySelector("#uploadedFile");
  const uploadedFileInfo = document.querySelector("#uploadedFileInfo");
  const uploadedFileName = document.querySelector(".uploaded-file__name");
  const uploadedFileIconText = document.querySelector(
    ".uploaded-file__icon-text"
  );
  const uploadedFileCounter = document.querySelector(".uploaded-file__counter");
  const toolTipDatas = document.querySelector(".upload-area__tooltip-data");
  const imagesTypes = ["jpeg", "png", "svg", "gif", "pdf", "pdf", "xlsx", "js"];

  toolTipDatas.innerHTML = [...imagesTypes].join(", .");

  dropZoon.addEventListener("dragover", function (event) {
    event.preventDefault();
    dropZoon.classList.add("drop-zoon--over");
  });
  dropZoon.addEventListener("dragleave", function (event) {
    dropZoon.classList.remove("drop-zoon--over");
  });
  dropZoon.addEventListener("drop", function (event) {
    event.preventDefault();
    dropZoon.classList.remove("drop-zoon--over");
    const file = event.dataTransfer.files[0];
    uploadFile(file);
  });
  dropZoon.addEventListener("click", function (event) {
    fileInput.click();
  });
  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    uploadFile(file);
  });

  // Upload File Function
  function uploadFile(file) {
    // FileReader()
    const fileReader = new FileReader();
    // File Type
    const fileType = file.type;
    // File Size
    const fileSize = file.size;

    // If File Is Passed from the (File Validation) Function
    if (fileValidate(fileType, fileSize)) {
      // Add Class (drop-zoon--Uploaded) on (drop-zoon)
      dropZoon.classList.add("drop-zoon--Uploaded");

      // Show Loading-text
      loadingText.style.display = "block";
      // Hide Preview Image

      previewImage.style.display = "none";

      // Remove Class (uploaded-file--open) From (uploadedFile)
      uploadedFile.classList.remove("uploaded-file--open");
      // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
      uploadedFileInfo.classList.remove("uploaded-file__info--active");

      // After File Reader Loaded
      fileReader.addEventListener("load", function () {
        // After Half Second
        setTimeout(function () {
          // Add Class (upload-area--open) On (uploadArea)
          uploadArea.classList.add("upload-area--open");

          // Hide Loading-text (please-wait) Element
          loadingText.style.display = "none";
          // Show Preview Image
          previewImage.style.display = "block";

          // Add Class (file-details--open) On (fileDetails)
          fileDetails.classList.add("file-details--open");
          // Add Class (uploaded-file--open) On (uploadedFile)
          uploadedFile.classList.add("uploaded-file--open");
          // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
          uploadedFileInfo.classList.add("uploaded-file__info--active");
        }, 500); // 0.5s

        // Add The (fileReader) Result Inside (previewImage) Source
        previewImage.setAttribute("src", fileReader.result);

        // Add File Name Inside Uploaded File Name
        uploadedFileName.innerHTML = file.name;

        setTimeout(() => {
          uploadedFile.style.display = "none";
        }, 3000)

        // Call Function progressMove();
        progressMove();
      });

      // Read (file) As Data Url
      fileReader.readAsDataURL(file);
    } else {
      // Else

      this; // (this) Represent The fileValidate(fileType, fileSize) Function
    }
  }

  // Progress Counter Increase Function
  function progressMove() {
    // Counter Start
    let counter = 0;

    // After 600ms
    setTimeout(() => {
      // Every 100ms
      let counterIncrease = setInterval(() => {
        // If (counter) is equle 100
        if (counter === 100) {
          // Stop (Counter Increase)
          clearInterval(counterIncrease);
        } else {
          // Else
          // plus 10 on counter
          counter = counter + 10;
          // add (counter) vlaue inisde (uploadedFileCounter)
          uploadedFileCounter.innerHTML = `${counter}%`;
        }
      }, 100);
    }, 600);
  }

  setTimeout(() => {
    uploadedFile.classList.remove("uploaded-file--open");
  }, 500);

  // Simple File Validate Function
  function fileValidate(fileType, fileSize) {
    // File Type Validation
    let isImage = imagesTypes.filter(
      (type) => fileType.indexOf(`image/${type}`) !== -1
    );

    // If The Uploaded File Type Is 'jpeg'
    if (isImage[0] === "jpeg") {
      // Add Inisde (uploadedFileIconText) The (jpg) Value
      uploadedFileIconText.innerHTML = "jpg";
    } else {
      // else
      // Add Inisde (uploadedFileIconText) The Uploaded File Type
      uploadedFileIconText.innerHTML = isImage[0];
    }

    // If The Uploaded File Is An Image
    if (isImage.length !== 0) {
      // Check, If File Size Is 2MB or Less
      if (fileSize <= 2000000) {
        // 2MB :)
        return true;
      } else {
        // Else File Size
        return alert("Please Your File Should be 2 Megabytes or Less");
      }
    } else {
      // Else File Type
      return alert("Please make sure to upload An Image File Type");
    }
  }
});

// add data to table from input
function multifacBtn() {
  var publishedtariff = document.getElementById("publishedtariff").value;
  var publishedavailable = document.getElementById("publishedavailable").value;
  var publishedforecast = document.getElementById("publishedforecast").value;
  var publishedactual = document.getElementById("publishedactual").value;

  if (publishedtariff == "") {
    document.getElementById("invalidMsg").innerHTML =
      "Please Fill in Published Tariff";
    document.getElementById("publishedtariff").focus();
    return;
  } else if (publishedavailable == "") {
    document.getElementById("invalidMsg").innerHTML =
      "Please Fill in Published Available Capacity";
    document.getElementById("publishedavailable").focus();
    return;
  } else if (publishedforecast == "") {
    document.getElementById("invalidMsg").innerHTML =
      "Please Fill in Published forecast active power";
    document.getElementById("publishedforecast").focus();
    return;
  } else if (publishedactual == "") {
    document.getElementById("invalidMsg").innerHTML =
      "Please Fill in Published actual active power";
    document.getElementById("publishedactual").focus();
    return;
  } else {
    document.getElementById("invalidMsg").innerHTML = "";
    let table = document.getElementById("viewdsmtabColoums");

    table.rows[1].cells[4].innerHTML = publishedtariff;
    table.rows[1].cells[5].innerHTML = publishedavailable;
    table.rows[1].cells[6].innerHTML = publishedforecast;
    table.rows[1].cells[7].innerHTML = publishedactual;

    document.getElementById("publishedtariff").value = "";
    document.getElementById("publishedavailable").value = "";
    document.getElementById("publishedforecast").value = "";
    document.getElementById("publishedactual").value = "";
  }

  publishedtariff = "";
  publishedavailable = "";
  publishedforecast = "";
  publishedactual = "";
}

// data-bs-dismiss="modal" aria-label="Close"

$(window).on("load", function () {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});


$(window).on("load", function () {
  $(".synccheckheader input:checkbox").change(function () {
    if ($(this).is(":checked")) {
      scheduledDataChart.chart.group = "social";
    } else {
      alert();
    }
  });
});


$(document).ready(function () {
  $("#rangestart").calendar({
    type: "date",
    endCalendar: $("#rangeend"),
  });
  $("#rangeend").calendar({
    type: "date",
    startCalendar: $("#rangestart"),
  });
});

$(document).ready(function () {
  $(".menu").click(function () {
    $(this).toggleClass("open");
  });
});


$(document).ready(function () {
  $(window).scroll(function () {
    $("header.header").toggleClass("nav-shrink", $(this).scrollTop() > 120)
  });
});


{
  let editBtn = document.getElementById("editformbtn");
  editBtn.addEventListener("click", editform);

  function editform() {
    let inputAll = document.querySelectorAll(".editchange");
    inputAll.forEach((item) => {
      item.removeAttribute("disabled");
    });
    editBtn.setAttribute("data-bs-dismiss", "modal");
    editBtn.innerHTML = "Save";
  }
}

{
  let submitBtn = document.getElementById("addremarkBtn");
  submitBtn.addEventListener("click", submitComment);

  function submitComment() {
    let comment = document.getElementById("postcomment").value;
    let showcomment = document.getElementById("comment");

    showcomment.innerHTML += comment + "<br>";
    document.getElementById("postcomment").value = "";
  }
}


