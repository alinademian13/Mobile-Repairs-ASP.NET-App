﻿

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
using System.Data.Entity;
using System.Data.Entity.Infrastructure;


public partial class MobileRepairs1Entities : DbContext
{
    public MobileRepairs1Entities()
        : base("name=MobileRepairs1Entities")
    {

    }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        throw new UnintentionalCodeFirstException();
    }


    public virtual DbSet<client> client { get; set; }

    public virtual DbSet<Comanda> Comanda { get; set; }

    public virtual DbSet<defectiune> defectiune { get; set; }

    public virtual DbSet<employee> employee { get; set; }

    public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }

    public virtual DbSet<telefon> telefon { get; set; }

}

}
