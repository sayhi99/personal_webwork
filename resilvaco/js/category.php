<?
    include "../lib/config.php";
    include "../lib/function.php";

    $deep = isnum($deep);

    for($j=$deep;$j<4;$j++)
    {
	    if ($deep == $j)
        {
?> 
categoryselected = <?=$name?><?=$j+1?>;
categoryselected.length = 0;
AddItem(categoryselected, "", "<?=$j+1?>차 카테고리 선택", 0);
<? 
            $value_s = 0;

            if ($code != "")
            {
                $qry = "select * from ibzone_category where deep=".($j)." and reid like '%$code%' order by position asc";
                $category_result = dbquery($qry);

                $i = 1;
                while($category_row = mysql_fetch_array($category_result))
                {
?>

AddItem(categoryselected, "<?=$category_row["code"]?>", "<?=$category_row["name"]?>", <?=$i?>);
<?
                      if ($category_row["code"] == $value) $value_s = $i;

                      $i++;
                } 
            }
?>  

categoryselected.selectedIndex = <?=$value_s?>;

<?
        }
        else
        {
            if ($$value == "")
            {
?>
categoryselected<?=$j+1?> = <?=$name?><?=$j+1?>;
categoryselected<?=$j+1?>.length = 0;
AddItem(categoryselected<?=$j+1?>, "", "<?=$j+1?>차 카테고리 선택", 0);
<?
            }
        }
    }
?>
