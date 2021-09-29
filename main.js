var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-260nw-582282625.jpg", "https://image.shutterstock.com/image-vector/working-mom-260nw-158801603.jpg", "https://image.shutterstock.com/image-vector/kid-black-illustration-260nw-1069239617.jpg"];
var names = ["Fmaily Book"," MY FATHER R.MURUGANANDAN", " MY MOTHER M.VIJAYALAKSHMI", " MYSELF M.V.NIRMAL"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
  
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}