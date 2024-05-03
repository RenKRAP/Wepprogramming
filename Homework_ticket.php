<?php
    $conn = mysqli_connect("localhost", 'root', '');
    $table = mysqli_select_db($conn, 'ticket');
?>

<!DOCTYPE html>
<html>
    <head>
        <style>
            .error {color: #FF0000}
        </style>
    </head>

    <body>
        <?php
            if(isset($_POST["user_name"])){
                $user_name = $_POST["user_name"]; //이용자명
                $today_child_permit = $_POST["today_child_permit"]; // 어린이 입장권
                $today_adult_permit = $_POST["today_adult_permit"]; // 어른 입장권
                $BIG3_child_permit = $_POST["BIG3_child_permit"]; // 어린이 BIG3
                $BIG3_adult_permit = $_POST["BIG3_adult_permit"]; // 어른 BIG3
                $free_child_permit = $_POST["free_child_permit"]; // 어린이 자유이용권
                $free_adult_permit = $_POST["free_adult_permit"]; // 어른 자유이용권
                $year_child_permit = $_POST["year_child_permit"]; // 어린이 자유이용권
                $year_adult_permit = $_POST["year_adult_permit"]; // 어른 자유이용권

                $encoded_name = base64_encode($_POST["user_name"]);

                $total_fee = ($today_child_permit * 7000) + ($today_adult_permit * 10000) + ($BIG3_child_permit * 12000) + ($BIG3_adult_permit * 16000)
                + ($free_child_permit * 21000) + ($free_adult_permit * 26000) + ($year_child_permit * 70000) + ($year_adult_permit * 90000);

                // SQL 문 생성
                $sql = "INSERT INTO `tickets` ". // tickets == table name
                "(`user_name`, `today_child_permit`, `today_adult_permit`, `BIG3_child_permit`, `BIG3_adult_permit`,
                `free_child_permit`, `free_adult_permit`,`year_child_permit`, `year_adult_permit`, `total`)".
                " VALUES ('$encoded_name', '$today_child_permit', '$today_adult_permit', '$BIG3_child_permit', '$BIG3_adult_permit',
                '$free_child_permit', '$free_adult_permit', '$year_child_permit', '$year_adult_permit', '$total_fee')";

                // 테이블에 업로드 시도
                $result = mysqli_query($conn, $sql);

                // === HTML 출력 ===
                echo "<p>$user_name 고객님 감사합니다.</p>";
            
                if ($today_child_permit > 0) echo "<p>어린이 입장권 $today_child_permit 매</p>"; // 어린이 입장권
                if ($today_adult_permit > 0) echo "<p>어른 입장권 $today_adult_permit 매</p>"; // 어른 입장권
                if ($BIG3_child_permit > 0) echo "<p>어린이 BIG3 $BIG3_child_permit 매</p>"; // 어린이 BIG3
                if ($BIG3_adult_permit > 0) echo "<p>어른 BIG3 $BIG3_adult_permit 매</p>"; // 어른 BIG3
                if ($free_child_permit > 0) echo "<p>어린이 자유이용권 $free_child_permit 매</p>"; // 어린이 자유이용권
                if ($free_adult_permit > 0) echo "<p>어른 자유이용권 $free_adult_permit 매</p>";  // 어른 자유이용권
                if ($year_child_permit > 0) echo "<p>어린이 연간이용권 $year_child_permit 매</p>"; //어린이 연간이용권
                if ($year_adult_permit > 0) echo "<p>어른 연간이용권 $year_adult_permit 매</p>"; // 어른 연간이용권            

                echo "<p>합계 $total_fee 원입니다.</p>";
            }
        ?>
    </body>
</html>