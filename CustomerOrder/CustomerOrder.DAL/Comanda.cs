//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CustomerOrder.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Comanda
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Comanda()
        {
            this.defectiune = new HashSet<defectiune>();
        }
    
        public int idComanda { get; set; }
        public Nullable<int> idClient { get; set; }
        public Nullable<int> idEmployee { get; set; }
        public Nullable<int> idTelefon { get; set; }
        public int idUnicTelefon { get; set; }
        public Nullable<bool> stare { get; set; }
        public Nullable<System.DateTime> DataDeschidere { get; set; }
        public Nullable<System.DateTime> DataInchidere { get; set; }
    
        public virtual client client { get; set; }
        public virtual telefon telefon { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<defectiune> defectiune { get; set; }
    }
}
