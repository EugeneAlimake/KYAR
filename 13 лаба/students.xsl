<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0" 
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">   

   <xsl:template match = "/"> 
      <html> 
         <body> 
            <table border = "#8B7765"> 
               <tr bgcolor = "#8B7765"> 
                  <th>Название универа</th> 
                  <th>Баллы</th> 
                  <th>Планы набора</th> 
                  <th>Город</th> 
               </tr> 
				
				
               <xsl:for-each select="class/student"> 
                  <tr bgcolor="#EEDFCC"> 
                     <td>
                        <xsl:value-of select = "@rollno"/> 
                     </td> 
						
                     <td><xsl:value-of select = "ball"/></td> 
                     <td><xsl:value-of select = "plan"/></td> 
                     <td><xsl:value-of select = "city"/></td> 
						
                  </tr> 
               </xsl:for-each> 
					
            </table> 
         </body> 
      </html> 
   </xsl:template>  
</xsl:stylesheet>