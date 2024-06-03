<?php

$conn=new mysqli("sql101.infinityfree.com","if0_36617396","Bd2emsLQ9a","if0_36617396_formulky");
$sql="INSERT INTO firsttable VALUES(1,'Jino')";
if($conn->query($sql))
{
    echo "value inserted";
}
else{
    echo "inertion failed";
}
$sql="SELECT * FROM firsttable;";
$result=$conn->query($sql);
if($result->num_rows>0){
    echo "<table border=1>";
    echo "<tr><th>number</th><th>name</th></tr>";
    while ($row=$result->fetch_assoc()){
        echo "<tr><td>".$row['id']."</td><td>".$row['name']."</td></tr>";
    }
    echo "</table>";
}
else{
    echo "O rows availabelů";
}

$conn->close()
?>
