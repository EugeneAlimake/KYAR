<?xml version = "1.0" encoding = "UTF-8"?> 
<xsl:stylesheet version = "1.0" 
   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">   
   <xsl:template match = "/"> 
      <html> 
         <body> 
            <table border = "1"> 
               <tr bgcolor = "#9acd32">                       <th>Имя</th> 
                  <th>Фамилия</th> 
                  <th>Баллы</th> 
                  <th>Возраст</th> 
               </tr> 
               
               <xsl:for-each select = "class/student">  
                  
             
                  <xsl:sort select="year" order="descending"  />
                  
                  
                <tr> 
                        <xsl:choose> 
                           <xsl:when test = "marks > 300"> 
                         <td bgcolor="red"> <xsl:value-of select = "firstname"/></td>  
                         <td  bgcolor="red"><xsl:value-of select = "lastname"/></td> 
                           </xsl:when>
                           <xsl:otherwise> 
                           <td > <xsl:value-of select = "firstname"/></td> 
                            <td > <xsl:value-of select = "lastname"/></td> 
                           </xsl:otherwise> 
                        </xsl:choose>
                     <td><xsl:value-of select = "marks"/></td>                     
                     <td><xsl:value-of select = "year"/></td>
                     
                   
                  </tr> 
               </xsl:for-each> 
            </table> 
         </body> 
      </html> 
   </xsl:template>  
</xsl:stylesheet>