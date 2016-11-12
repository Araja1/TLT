using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using TinyTime;

namespace TinyTime.Controllers
{
    public class TimeSheetEntriesController : Controller
    {
        private TINYDB db = new TINYDB();

        // GET: TimeSheetEntries
        public ActionResult Index()
        {
            var timeSheetEntries = db.TimeSheetEntries.Include(t => t.AspNetUsers);
            return View(timeSheetEntries.ToList());
        }

        // GET: TimeSheetEntries/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TimeSheetEntries timeSheetEntries = db.TimeSheetEntries.Find(id);
            if (timeSheetEntries == null)
            {
                return HttpNotFound();
            }
            return View(timeSheetEntries);
        }

        // GET: TimeSheetEntries/Create
        public ActionResult Create()
        {
            ViewBag.UserId = new SelectList(db.AspNetUsers, "Id", "Email");
            return View();
        }

        // POST: TimeSheetEntries/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
       // [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,StartTime,EndTime,Comment,UserId")] TimeSheetEntries timeSheetEntries)
        {
            if (ModelState.IsValid)
            {
                db.TimeSheetEntries.Add(timeSheetEntries);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.UserId = new SelectList(db.AspNetUsers, "Id", "Email", timeSheetEntries.UserId);
            return View(timeSheetEntries);
        }

        // GET: TimeSheetEntries/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TimeSheetEntries timeSheetEntries = db.TimeSheetEntries.Find(id);
            if (timeSheetEntries == null)
            {
                return HttpNotFound();
            }
            ViewBag.UserId = new SelectList(db.AspNetUsers, "Id", "Email", timeSheetEntries.UserId);
            return View(timeSheetEntries);
        }

        // POST: TimeSheetEntries/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,StartTime,EndTime,Comment,UserId")] TimeSheetEntries timeSheetEntries)
        {
            if (ModelState.IsValid)
            {
                db.Entry(timeSheetEntries).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.UserId = new SelectList(db.AspNetUsers, "Id", "Email", timeSheetEntries.UserId);
            return View(timeSheetEntries);
        }

        // GET: TimeSheetEntries/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            TimeSheetEntries timeSheetEntries = db.TimeSheetEntries.Find(id);
            if (timeSheetEntries == null)
            {
                return HttpNotFound();
            }
            return View(timeSheetEntries);
        }

        // POST: TimeSheetEntries/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            TimeSheetEntries timeSheetEntries = db.TimeSheetEntries.Find(id);
            db.TimeSheetEntries.Remove(timeSheetEntries);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
