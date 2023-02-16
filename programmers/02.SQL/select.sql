-- 01.
select 
    round(avg(daily_fee)) AVERAGE_FEE
from
    car_rental_company_car
where
    car_type = 'SUV'

-- 02. 
select 
    member_id, member_name, gender, date_format(date_of_birth, "%Y-%m-%d") as DATE_OF_BIRTH
from 
    member_profile
where
    month(date_of_birth) = '3'
    and
    gender = 'w'
    and
    tlno is not null
order by member_id

-- 03
SELECT f.FLAVOR
FROM 
    FIRST_HALF f left join ICECREAM_info i
    ON f.FLAVOR = i.FLAVOR
WHERE 
    total_order > '3000'
    AND INGREDIENT_TYPE ="fruit_based"