let solution = num_list => +num_list.filter(v=>v%2==0).map(v=>""+v).join("")+(+num_list.filter(v=>v%2!=0).map(v=>""+v).join(""))