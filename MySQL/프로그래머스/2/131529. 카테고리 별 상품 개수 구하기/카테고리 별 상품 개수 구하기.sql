SELECT  SUBSTR(PRODUCT_CODE,1,2) AS CATEGORY
        , COUNT(*)
  FROM  PRODUCT 
 GROUP
    BY  SUBSTR(PRODUCT_CODE,1,2)